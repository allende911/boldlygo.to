import React, { useState, useEffect } from "react";
import NewPostForm from "./NewPostForm";
import NewPostPreview from "./NewPostPreview";
import { strapiParse } from "strapi-parse";

const AddPostHandler = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [previewImage, setPreviewImage] = useState(
    "https://source.unsplash.com/random/?camping"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [newPost, setNewPost] = useState([
    {
      Author: "",
      Title: "",
      Content: "",
      PreviewImage: "",
      Date: "",
    },
  ]);

  const handleAuthor = (event) => {
    setAuthor((prevAuthor) => event.target.value);
    console.log(author);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleContent = (event) => {
    setContent(event.target.value);
  };

  const handlePreviewImage = (event) => {
    setPreviewImage(event.target.value);
  };

  const handleToggleLoading = () => {
    setIsLoading(!isLoading);
  };

  const handleNewPost = (event) => {
    event.preventDefault();
    handleToggleLoading();
    fetch("http://localhost:1337/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          Author: author,
          Title: title,
          Content: content,
          PreviewImage: previewImage,
          Date: new Date(date),
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNewPost((prevData) => strapiParse(data));
        console.log(data.data.id);
      })
      .catch((error) => {
        console.log(error);
        if (!error) {
          handleToggleLoading();
        }
      });
  };

  return (
    <>
      <NewPostForm
        onNewPost={handleNewPost}
        onChangeTitle={handleTitle}
        onChangeContent={handleContent}
        onChangeDate={handleDate}
        onChangeAuthor={handleAuthor}
        onChangePreviewImage={handlePreviewImage}
        onIsLoading={handleToggleLoading}
        previewTitle={title}
        previewContent={content}
        previewImage={previewImage}
        previewDate={date}
        previewAuthor={author}
      />
    </>
  );
};

export default AddPostHandler;
