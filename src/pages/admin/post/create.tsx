import React, { useState } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { useRouter } from "next/router";

import { CategoryRepository } from "@server/repositories";
import { Category } from "@server/models";

interface FormData {
  title?: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  categoryId?: number;
}

interface Props {
  categories: Category[];
}

export async function getServerSideProps() {
  const categories = await CategoryRepository.findAllRaw();

  return { props: { categories } };
}

export default function CreatePostPage(props: Props) {
  const { categories } = props;
  const [formData, setFormData] = useState<FormData>({
    categoryId: categories.length ? categories[0].id : null,
  });
  const router = useRouter();

  function onChange(e: any) {
    const value = e.target.value;
    const name = e.target.name;
    const _formData: any = formData;

    _formData[name] = value;
    setFormData({ ..._formData });
  }

  async function createPost() {
    debugger;
    try {
      const res = await fetch("/api/admin/post", {
        method: "post",
        body: JSON.stringify(formData),
      });
      await res.json();

      router.push("/admin/post");
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <FormGroup>
        <Label>Post Title</Label>
        <Input name="title" value={formData.title} onChange={onChange} />
      </FormGroup>
      <FormGroup>
        <Label>Post Slug</Label>
        <Input name="slug" value={formData.slug} onChange={onChange} />
      </FormGroup>
      <FormGroup>
        <Label>Post Excerpt</Label>
        <Input name="excerpt" value={formData.excerpt} onChange={onChange} />
      </FormGroup>
      <FormGroup>
        <Label>Select Category</Label>
        <Input
          type="select"
          name="categoryId"
          value={formData.categoryId}
          onChange={onChange}
        >
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </Input>
      </FormGroup>
      <FormGroup>
        <Label>Post Content</Label>
        <Input
          type="textarea"
          name="content"
          value={formData.content}
          onChange={onChange}
        ></Input>
      </FormGroup>
      <FormGroup>
        <Button color="info" onClick={createPost}>
          Create
        </Button>
      </FormGroup>
    </div>
  );
}
