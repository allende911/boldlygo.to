import React from "react";

const BlogEntryForm = (props) => {
  return (
    <form onSubmit={props.onBlogPostSubmit}>
      <div>
        <div>
          <label htmlFor="blogAuthor">Author:</label>
          <select id="blogAuthor" onChange={props.onBlogAuthor}>
            <option>Choose Author:</option>
            <option>Casi</option>
            <option>Danny</option>
          </select>
          <label htmlFor="blogDate">Date:</label>
          <input type="date" id="blogDate" onChange={props.onBlogDate} />
        </div>
        <div className="blog-entry__content">
          <label htmlFor="blogTitle">Title:</label>
          <input
            type="text"
            id="blogTitle"
            onChange={props.onBlogTitle}
            value={props.blogTitle}
          />
          <label htmlFor="blogEntry">Entry:</label>
          <input
            type="text"
            id="blogEntry"
            onChange={props.onBlogEntry}
            value={props.entry}
          />
          <label htmlFor="cardImage">Card Image:</label>
          <input
            type="url"
            id="blogCardImage"
            onChange={props.onBlogCardImage}
          />
        </div>
        <button type="submit">Post Blog</button>
      </div>
    </form>
  );
};

export default BlogEntryForm;
