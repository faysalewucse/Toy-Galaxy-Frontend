import { BsPin, BsPinFill } from "react-icons/bs";
import useTitle from "../hooks/useTitle";
import { useAuth } from "../contexts/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import { useRef, useState } from "react";

export default function Blogs() {
  useTitle("BLOGS");

  const { currentUser } = useAuth();
  let [pinnedBlogs, setBlogs] = useState(
    JSON.parse(localStorage.getItem(currentUser))
  );
  const divRef = useRef(null);

  const pinHandler = (blogId) => {
    if (!currentUser) {
      toast.error("You must be logged in first to pin this blog.");
    } else {
      if (divRef.current) {
        const divString = divRef.current.outerHTML;
        // check if the user is already pinned the blog
        if (pinnedBlogs?.some((blog) => blog.id === blogId)) {
          const filteredBlogs = pinnedBlogs.filter(
            (blog) => blog.id !== blogId
          );
          localStorage.setItem(currentUser, JSON.stringify(filteredBlogs));
          setBlogs(filteredBlogs);
          return toast.success("Blog Unpinned.");
        }

        if (pinnedBlogs) {
          pinnedBlogs.push({ id: blogId, div: divString });
        } else {
          pinnedBlogs = [{ id: blogId, div: divString }];
        }
        localStorage.setItem(currentUser, JSON.stringify(pinnedBlogs));
        toast.success("Blog Pinned to Homepage.");
        setBlogs(JSON.parse(localStorage.getItem(currentUser)));
      }
    }
  };

  return (
    <div className="p-2 md:py-8 bg-gradient-to-t from-blue-800 to-primary">
      <h1 className="text-center text-5xl font-bold mb-14 text-white">Blogs</h1>

      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8 text-justify">
        <div
          ref={divRef}
          className="bg-gradient-to-t from-blue-800 to-blue-900  rounded p-6 border border-primary text-white"
        >
          {pinnedBlogs?.some((blog) => blog.id === "blog1") ? (
            <BsPinFill
              onClick={() => pinHandler("blog1")}
              className={`text-3xl mb-5 float-right ${
                !currentUser ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            />
          ) : (
            <BsPin
              onClick={() => pinHandler("blog1")}
              className={`text-3xl mb-5 float-right ${
                !currentUser ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            />
          )}
          <h2 className="text-xl font-semibold mb-4">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <p className="text-secondary mb-3">
            An access token is a piece of information issued to a client after
            successful authentication. It serves as a credential that grants
            access to protected resources or APIs. On the other hand, a refresh
            token is a token used to obtain a new access token once the previous
            one expires.
          </p>
          <b>Here's how they work together:</b>
          <p className="text-secondary">
            When a user logs in or authenticates, they receive an access token
            and a refresh token. The access token is typically short-lived and
            contains information such as the user's identity and permissions. It
            is sent with each subsequent request to access protected resources.
            When the access token expires, the client can use the refresh token
            to request a new access token without requiring the user to log in
            again. The refresh token is sent to a token endpoint, usually on the
            server-side, where it is validated. If the refresh token is valid, a
            new access token is generated and returned to the client. On the
            client-side, it is essential to store these tokens securely to
            prevent unauthorized access. <br />
            <br />
          </p>
          <b>Storing</b>
          <p className="text-secondary">
            One common practice is to store the access token in memory or local
            storage, as it needs to be included in each request to access
            protected resources. However, storing sensitive tokens like refresh
            tokens in cookies with the HttpOnly flag can enhance security by
            protecting them from client-side.
          </p>
        </div>

        <div
          ref={divRef}
          className="bg-gradient-to-t from-blue-800 to-blue-900  rounded p-6 border border-primary text-white"
        >
          {pinnedBlogs?.some((blog) => blog.id === "blog2") ? (
            <BsPinFill
              onClick={() => pinHandler("blog2")}
              className={`text-3xl mb-5 float-right ${
                !currentUser ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            />
          ) : (
            <BsPin
              onClick={() => pinHandler("blog2")}
              className={`text-3xl mb-5 float-right ${
                !currentUser ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            />
          )}
          <h2 className="text-xl font-semibold mb-4">
            Compare SQL and NoSQL databases?
          </h2>
          <p className="text-secondary">
            SQL (Structured Query Language) and NoSQL (Not only SQL) databases
            are two different types of database management systems with distinct
            characteristics:
          </p>
          <br />
          <b>SQL Databases:</b>
          <p className="text-secondary">
            <li>
              Relational databases that use structured tables to store data.
            </li>
            <li>
              Data is organized into rows and columns, and relationships between
              tables are defined using primary and foreign keys.
            </li>
            <li>Support for complex queries and transactions.</li>
            <li>
              Well-suited for structured and predefined data with fixed schemas.
            </li>
            <li>Examples: MySQL, PostgreSQL, Oracle.</li>
          </p>
          <br />
          <b>NoSQL Databases:</b>
          <p className="text-secondary">
            <li>
              Non-relational databases that store data in various formats like
              key-value pairs, documents, graphs, or wide-column stores.
            </li>
            <li>
              Flexible schema design allows for dynamic and evolving data
              structures.
            </li>
            <li>
              Horizontal scalability with the ability to handle large volumes of
              data.
            </li>
            <li>
              High performance for specific use cases, such as real-time
              analytics, content management, and caching.
            </li>
            <li>Examples: MongoDB, Cassandra, Redis.</li>
          </p>
          <br />
          <p>
            The choice between SQL and NoSQL databases depends on various
            factors, including the nature of the data, scalability requirements,
            flexibility of the schema, and the specific use case of the
            application.
          </p>
        </div>

        <div
          ref={divRef}
          className="bg-gradient-to-t to-blue-800 from-blue-900  rounded p-6 border border-primary text-white"
        >
          {pinnedBlogs?.some((blog) => blog.id === "blog3") ? (
            <BsPinFill
              onClick={() => pinHandler("blog3")}
              className={`text-3xl mb-5 float-right ${
                !currentUser ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            />
          ) : (
            <BsPin
              onClick={() => pinHandler("blog3")}
              className={`text-3xl mb-5 float-right ${
                !currentUser ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            />
          )}
          <h2 className="text-xl font-semibold mb-4">
            What is express js? What is Nest JS?
          </h2>
          <b>Express.js: </b>
          <p className="text-secondary flex flex-col gap-5">
            <li>
              Express.js is a popular web application framework for Node.js,
              designed to build web applications and APIs.
            </li>
            <li>
              It provides a simple and minimalist approach to handle HTTP
              requests, routes, middleware, and view rendering.
            </li>
            <li>
              Express.js is highly flexible and allows developers to create
              server-side applications using JavaScript.
            </li>
          </p>
          <br />
          <b>Nest.js: </b>
          <p className="text-secondary flex flex-col gap-5">
            <li>
              Nest.js is a progressive and opinionated framework for building
              scalable and maintainable server-side applications with Node.js.
            </li>
            <li>
              It is built on top of Express.js and provides additional features,
              such as dependency injection, decorators, modules, and a powerful
              CLI.
            </li>
            <li>
              Nest.js follows a modular and structured architecture inspired by
              Angular, making it suitable for large-scale applications.
            </li>
          </p>
          <br />
          <p>
            Both Express.js and Nest.js are used to build server-side
            applications, but Nest.js offers a more structured and opinionated
            approach while leveraging the power and flexibility of Express.js.
          </p>
        </div>

        <div
          ref={divRef}
          className="bg-gradient-to-t to-blue-800 from-blue-900  rounded p-6 border border-primary text-white"
        >
          {pinnedBlogs?.some((blog) => blog.id === "blog4") ? (
            <BsPinFill
              onClick={() => pinHandler("blog4")}
              className={`text-3xl mb-5 float-right ${
                !currentUser ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            />
          ) : (
            <BsPin
              onClick={() => pinHandler("blog4")}
              className={`text-3xl mb-5 float-right ${
                !currentUser ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            />
          )}
          <h2 className="text-xl font-semibold mb-4">
            What is MongoDB aggregate and how does it work?
          </h2>
          <p className="text-secondary">
            MongoDB's aggregation framework is a powerful feature that allows
            you to process and transform data within the database. It provides a
            way to perform complex queries, data manipulations, transformations,
            and analytics operations. <br />
            <br />{" "}
            <span className="text-white">
              The aggregation pipeline in MongoDB consists of multiple stages,
              each representing an operation performed on the data. These stages
              can include filtering, sorting, grouping, transforming, and
              aggregating data.
            </span>{" "}
            <br />
            <br /> The aggregate function in MongoDB takes an array of pipeline
            stages as input. Each stage specifies an operation to be performed
            on the data, such as $match for filtering documents, $group for
            grouping documents, $sort for sorting, and so on. <br />
            <br /> The pipeline stages are processed sequentially, with the
            output of one stage becoming the input for the next. This allows for
            a flexible and expressive way to transform and analyze data within
            the database. <br />
            <br /> Aggregation in MongoDB enables powerful operations like
            calculating averages, counting occurrences, finding minimum and
            maximum values, joining multiple collections, and more. It provides
            a comprehensive set of operators and stages to perform data
            manipulation and analysis efficiently. <br />
            <br /> To use the aggregation framework, you construct the pipeline
            stages based on your requirements and execute the aggregate function
            in MongoDB, which returns the processed results based on the defined
            stages.
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
