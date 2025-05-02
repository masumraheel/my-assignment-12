import React from 'react';
import Cover from '../Components/Cover/Cover';
import blogImage from "../assets/Cover image/blogs.png"

const Blogs = () => {
    return (
        <div>
            <Cover img={blogImage}></Cover>
            Blogs
        </div>
    );
};

export default Blogs;