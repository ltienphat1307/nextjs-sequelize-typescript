import React, { useState } from "react";
import { NextPageContext } from "next";
import {
  Table,
  Button,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";

import { CategoryRepository } from "@server/repositories";
import { Category } from "@server/models";

interface CategoryPageProps {
  categories: Category[];
}

interface FormData {
  name?: string;
  slug?: string;
}

export async function getServerSideProps(_nextPage: NextPageContext) {
  const categories = await CategoryRepository.findAllRaw();

  return { props: { categories } };
}

export default function CategoryPage(props: CategoryPageProps) {
  const [formData, setFormData] = useState<FormData>({});
  const [categories, setCategories] = useState<Category[]>(props.categories);

  async function createCategory() {
    try {
      const res = await fetch("/api/admin/category", {
        method: "post",
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      categories.push(data);

      setCategories([...categories]);
      setFormData({});
    } catch (e) {
      console.error(e);
    }
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const name = e.target.name;
    const _formData: any = formData;

    _formData[name] = value;
    setFormData({ ..._formData });
  }

  return (
    <div>
      <FormGroup>
        <Label>Category Name</Label>
        <Input name="name" value={formData.name} onChange={onChange} />
        <FormFeedback>Slug is available</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label>Category Slug</Label>
        <Input name="slug" value={formData.slug} onChange={onChange} />
        <FormFeedback>Slug is available</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Button color="info" onClick={createCategory}>
          Create new category
        </Button>
      </FormGroup>
      <Table className="table-striped">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Created Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, idx) => (
            <tr key={category.id}>
              <td>{idx + 1}</td>
              <td>{category.name}</td>
              <td>{category.slug}</td>
              <td>{category.createdAt}</td>
              <td>
                <Button color="success">Edit</Button>
                <Button color="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
