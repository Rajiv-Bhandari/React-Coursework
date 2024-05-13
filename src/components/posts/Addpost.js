import React, { useState } from "react";
import "./addpost.css";
import Footer from "../footer/footer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://localhost:7186/api/post/create-post",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, description }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create post.");
      }

      const data = await response.json();
      console.log(data);

      console.log("Post created successfully!");
      toast.success("Post created successfully");
      navigate("/blogs");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to create post");
      navigate("/blogs");
    }
  };

  return (
    <>
      <div className="add-post-container">
        <h2>Add Post</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
