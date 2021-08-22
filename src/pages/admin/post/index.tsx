import React, { useState } from "react";
import { NextPageContext } from "next";
import { Table, Button } from "reactstrap";
import Link from "next/link";

import { PostRepository } from "@server/repositories";
import { Post } from "@server/models";

interface PostPageProps {
  posts: Post[];
}

export async function getServerSideProps(_nextPage: NextPageContext) {
  const posts = await PostRepository.findAllRaw();

  return { props: { posts } };
}

export default function CategoryPage(props: PostPageProps) {
  const [posts, setPosts] = useState<Post[]>(props.posts);
  setPosts;
  return (
    <div>
      <h1>Posts</h1>
      <Button color="success" className="mb-2">
        <Link href="/admin/post/create">
          <a style={{ color: "white" }}>Create new post</a>
        </Link>
      </Button>
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
          {posts.map((post, idx) => (
            <tr key={post.id}>
              <td>{idx + 1}</td>
              <td>{post.title}</td>
              <td>{post.slug}</td>
              <td>{post.createdAt}</td>
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
