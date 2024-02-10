import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout";
import fs from 'fs'
import path from "path";
import moment from "moment";
import matter from "gray-matter";

const inter = Inter({ subsets: ["latin"] });

export default function Home({posts}) {
  return (
    <Layout>
      <Head>
        <title>My Blog Site</title>
      </Head>
        {/* Banner */}
        <section id="banner" className="major">
          <div className="inner">
            <header className="major">
              <h1>Hi, my name is Aaron Simmons</h1>
            </header>
            <div className="content">
              <p>
                A responsive Next.js blog site discussing 
                <br />
                some of my favorite topics.
              </p>
              <ul className="actions">
                <li>
                  <a href="#one" className="button next scrolly">
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Main */}
        <div id="main">
          {/* One */}
          <section id="one" className="tiles">
            {/*Loop over posts */}

            {posts.map((post) => (
                          <article>
              <span className="image">
                <img src={`images/${post.featured_image}`} alt="" />
              </span>
              <header className="major">
                <h3>
                  <a href={`${post.slug}`} className="link">
                    {post.title}
                  </a>
                </h3>
                <p></p>
              </header>
            </article>
            )) }
          </section>
          {/* Two */}
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>About Me</h2>
              </header>
              <p>
                Hey there! I'm Aaron Simmons, an entrepreneur, Web Development aficionado, and Muay Thai enthusiast calling the vibrant streets of New York City home. Picture me as your friendly neighborhood coder with a knack for turning lines of code into captivating online experiences. Whether it's JavaScript, React.js, Python, or a sprinkle of HTML and CSS magic, I'm all about bringing innovative ideas to life on the web. If you'd like to see blog posts on any topics of your liking feel free to reach out below!
              </p>

            </div>
          </section>
        </div>
       
    </Layout>
  );
}

export const getStaticProps = async () => {
    const sortPosts = () => {
      const allPosts = fs.readdirSync("posts").map((filename) => {
        const file = fs.readFileSync(path.join("posts", filename)).toString();
        const postData = matter(file);
        
        return {
          content: postData.content,
          title: postData.data.title,
          featured_image: postData.data.featured_image,
          date: postData.data.date,
          slug: postData.data.slug
        };
      });
      
    return allPosts.sort((a,b) => new moment(a.date).format('YYYY-MM-DD HH:mm:ss') < new moment(b.date).format('YYYY-MM-DD HH:mm:ss'))
}
console.log(sortPosts())
sortPosts();

return {
  props:{
    slug: 'test',
    posts: sortPosts(),
  },
}
}
