import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../../assets/Images/1.png";
import icon2 from "../../assets/Images/2.png";
import icon3 from "../../assets/Images/3.png";
import icon4 from "../../assets/Images/connect.png";

function AboutUs() {
  return (
    <div
      style={{
        margin: "auto",
        textAlign: "center",
        maxWidth: "1200px",
        marginTop: "5rem",
        padding: "0 1rem",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          color: "GrayText",
          marginTop: "1rem",
        }}
      >
        EduVista
      </h1>

      <p
        style={{
          fontSize: "1rem",
          marginBottom: "1rem",
          color: "GrayText",
          textAlign: "justify",
        }}
      >
        EduVista is an innovative online learning platform designed to cater to
        the diverse educational needs of users. With a commitment to providing a
        seamless and enjoyable learning experience, EduVista offers a hub for
        knowledge seekers, providing a variety of services such as educational
        videos, projects, and certifications. Our platform is not just about
        courses; it's a community where learners can grow, connect, and explore
        detailed roadmaps for various domains. We believe in empowering users
        through cutting-edge technology, user-friendly interfaces, and a
        comprehensive approach to education.
      </p>

      <p
        style={{
          fontSize: "1rem",
          marginBottom: "1rem",
          color: "GrayText",
          textAlign: "justify",
        }}
      >
        At EduVista, our mission extends beyond traditional online learning. We
        are dedicated to creating a supportive environment where users can not
        only acquire knowledge but also collaborate, share ideas, and connect
        with like-minded individuals. The platform features a curated roadmap
        for various domains, ensuring users have a clear path to follow in their
        educational journey. Whether you are a student, professional, or
        enthusiast, EduVista welcomes you to a world of learning and growth.
        Join us to explore a range of services, connect with our community, and
        embark on a journey of continuous education and skill development.
      </p>

      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          color: "red",
          marginTop: "1rem",
        }}
      >
        Why Choose Us?
      </h1>

      <h1
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          color: "#33a1ff",
          marginTop: "1rem",
        }}
      >
        Our Services
      </h1>

      {/* <div className="flex flex-column justify-center mb-12">
        <div className="flex items-center mx-6 text-center">
          <img
            src={icon2}
            alt="Icon 2"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "50%",
              marginBottom: "1rem",
            }}
          />
          
        </div>
        <div className="flex items-center mx-6 text-center">
          <img
            src={icon1}
            alt="Icon 1"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "50%",
              marginBottom: "1rem",
            }}
          />
          
        </div>

        <div className="flex items-center mx-6 text-center">
          <img
            src={icon3}
            alt="Icon 3"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "50%",
              marginBottom: "1rem",
            }}
          />
          
        </div>

        <div className="flex items-center mx-6 text-center">
          <img
            src={icon4}
            alt="Icon 1"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "50%",
              marginBottom: "1rem",
            }}
          />
          
        </div>
      </div> */}

      <div className="flex justify-center mb-12">
        <div className="flex items-center mx-6 text-center">
          <img
            src={icon2}
            alt="Icon 2"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "50%",
              marginBottom: "1rem",
            }}
          />
        </div>
        <div className="flex items-center mx-6 text-center">
          <img
            src={icon1}
            alt="Icon 1"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "50%",
              marginBottom: "1rem",
            }}
          />
        </div>

        <div className="flex items-center mx-6 text-center">
          <img
            src={icon3}
            alt="Icon 3"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "50%",
              marginBottom: "1rem",
            }}
          />
        </div>

        <div className="flex items-center mx-6 text-center">
          <img
            src={icon4}
            alt="Icon 1"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "50%",
              marginBottom: "1rem",
            }}
          />
        </div>
      </div>

      <div
        style={{
          padding: "1rem",
          backgroundColor: "#f4f4f8",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "#333",
          }}
        >
          We Will Be Happy to Provide You Services
        </h1>
        <h3
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            color: "#666",
          }}
        >
          Please connect with us and make your documents more secure.
        </h3>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <button
            style={{
              backgroundColor: "#008080",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            <Link to="/contact">Contact Us</Link>
          </button>

          <button
            style={{
              backgroundColor: "#00cc66",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
