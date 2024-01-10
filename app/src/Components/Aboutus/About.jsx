// import React from "react";

// function AboutUs() {
//   const iconUrls = Array.from({ length: 6 }, (_, index) =>
//     `https://placekitten.com/150/15${index}`
//   );

//   return (
//     <div style={{ margin: "auto", textAlign: "center", maxWidth: "800px", marginTop: "5rem", padding: "0 1rem" }}>
//       <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "black", marginTop: "1rem" }}>
//         We Are Website Name
//       </h1>

//       <p style={{ fontSize: "1rem", marginBottom: "1rem", color: "black", textAlign: "justify" }}>
//         Welcome to our platform! We are a team of passionate individuals
//         dedicated to providing innovative solutions. Our mission is to make your
//         online experience seamless and enjoyable. Lorem ipsum dolor sit amet,
//         consectetur adipiscing elit. Quisque ac mauris sit amet magna
//         ullamcorper efficitur. Welcome to our platform! We are a team of
//         passionate individuals dedicated to providing innovative solutions. Our
//         mission is to make your online experience seamless and enjoyable. Lorem
//         ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac mauris sit
//         amet magna ullamcorper efficitur.
//       </p>

//       <p style={{ fontSize: "1rem", marginBottom: "1rem", color: "black", textAlign: "justify" }}>
//         At "Website Name," we believe in simplicity and efficiency. Our goal is
//         to empower users through cutting-edge technology and user-friendly
//         interfaces. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         Quisque ac mauris sit amet magna ullamcorper efficitur. Welcome to our
//         platform! We are a team of passionate individuals dedicated to providing
//         innovative solutions. Our mission is to make your online experience
//         seamless and enjoyable. Lorem ipsum dolor sit amet, consectetur
//         adipiscing elit. Quisque ac mauris sit amet magna ullamcorper efficitur.
//       </p>

//       <p style={{ fontSize: "1rem", marginBottom: "1rem", color: "black", textAlign: "justify" }}>
//         At "Website Name," we believe in simplicity and efficiency. Our goal is
//         to empower users through cutting-edge technology and user-friendly
//         interfaces. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         Quisque ac mauris sit amet magna ullamcorper efficitur. Welcome to our
//         platform! We are a team of passionate individuals dedicated to providing
//         innovative solutions. Our mission is to make your online experience
//         seamless and enjoyable. Lorem ipsum dolor sit amet, consectetur
//         adipiscing elit. Quisque ac mauris sit amet magna ullamcorper efficitur.
//       </p>
//       <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "red", marginTop: "1rem" }}>
//         Why Choose Us?
//       </h1>

//       <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#33a1ff", marginTop: "1rem" }}>
//         Our Services
//       </h1>

//       <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "2rem" }}>
//         {iconUrls.map((url, index) => (
//           <div
//             key={index}
//             style={{ marginBottom: "1rem" }}
//           >
//             <img
//               src={url}
//               alt={`Icon ${index + 1}`}
//               style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "50%", border: "4px solid #00ADB5", marginBottom: "1rem" }}
//             />
//             <p style={{ fontSize: "1rem", fontWeight: "bold", color: "black" }}>
//               Description {index + 1}. Lorem ipsum dolor sit amet, consectetur
//               adipiscing elit.
//             </p>
//           </div>
//         ))}
//       </div>

//       <div style={{ padding: "1rem", backgroundColor: "#f4f4f8", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "8px", marginLeft: "auto", marginRight: "auto" }}>
//         <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#333" }}>
//           We Will Be Happy to Provide You Services
//         </h1>
//         <h3 style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "2rem", color: "#666" }}>
//           Please connect with us and make your documents more secure.
//         </h3>

//         <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
//           <button style={{ backgroundColor: "#008080", color: "white", padding: "0.5rem 1rem", borderRadius: "5px", border: "none", cursor: "pointer", transition: "background-color 0.3s ease" }}>
//             Contact Us
//           </button>
//           <button style={{ backgroundColor: "#0077cc", color: "white", padding: "0.5rem 1rem", borderRadius: "5px", border: "none", cursor: "pointer", transition: "background-color 0.3s ease" }}>
//             LinKeldn
//           </button>
//           <button style={{ backgroundColor: "#00cc66", color: "white", padding: "0.5rem 1rem", borderRadius: "5px", border: "none", cursor: "pointer", transition: "background-color 0.3s ease" }}>
//             WhatsApp
//           </button>
//           <button style={{ backgroundColor: "#ff5050", color: "white", padding: "0.5rem 1rem", borderRadius: "5px", border: "none", cursor: "pointer", transition: "background-color 0.3s ease" }}>
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutUs;
import React from "react";

function AboutUs() {
  const iconUrls = Array.from({ length: 6 }, (_, index) =>
    `https://placekitten.com/150/15${index}`
  );

  return (
    <div style={{ margin: "auto", textAlign: "center", maxWidth: "800px", marginTop: "5rem", padding: "0 1rem" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "black", marginTop: "1rem" }}>
        We Are Website Name
      </h1>

      <p style={{ fontSize: "1rem", marginBottom: "1rem", color: "black", textAlign: "justify" }}>
        Welcome to our platform! We are a team of passionate individuals
        dedicated to providing innovative solutions. Our mission is to make your
        online experience seamless and enjoyable. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Quisque ac mauris sit amet magna
        ullamcorper efficitur. Welcome to our platform! We are a team of
        passionate individuals dedicated to providing innovative solutions. Our
        mission is to make your online experience seamless and enjoyable. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac mauris sit
        amet magna ullamcorper efficitur.
      </p>

      <p style={{ fontSize: "1rem", marginBottom: "1rem", color: "black", textAlign: "justify" }}>
        At "Website Name," we believe in simplicity and efficiency. Our goal is
        to empower users through cutting-edge technology and user-friendly
        interfaces. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque ac mauris sit amet magna ullamcorper efficitur. Welcome to our
        platform! We are a team of passionate individuals dedicated to providing
        innovative solutions. Our mission is to make your online experience
        seamless and enjoyable. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Quisque ac mauris sit amet magna ullamcorper efficitur.
      </p>

      <p style={{ fontSize: "1rem", marginBottom: "1rem", color: "black", textAlign: "justify" }}>
        At "Website Name," we believe in simplicity and efficiency. Our goal is
        to empower users through cutting-edge technology and user-friendly
        interfaces. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque ac mauris sit amet magna ullamcorper efficitur. Welcome to our
        platform! We are a team of passionate individuals dedicated to providing
        innovative solutions. Our mission is to make your online experience
        seamless and enjoyable. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Quisque ac mauris sit amet magna ullamcorper efficitur.
      </p>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", color: "red", marginTop: "1rem" }}>
        Why Choose Us?
      </h1>

      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#33a1ff", marginTop: "1rem" }}>
        Our Services
      </h1>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "2rem" }}>
        {iconUrls.map((url, index) => (
          <div
            key={index}
            style={{ marginBottom: "1rem" }}
          >
            <img
              src={url}
              alt={`Icon ${index + 1}`}
              style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "50%", border: "4px solid #00ADB5", marginBottom: "1rem" }}
            />
            <p style={{ fontSize: "1rem", fontWeight: "bold", color: "black" }}>
              Description {index + 1}. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
        ))}
      </div>

      <div style={{ padding: "1rem", backgroundColor: "#f4f4f8", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", borderRadius: "8px", marginLeft: "auto", marginRight: "auto" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem", color: "#333" }}>
          We Will Be Happy to Provide You Services
        </h1>
        <h3 style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "2rem", color: "#666" }}>
          Please connect with us and make your documents more secure.
        </h3>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
          <button style={{ backgroundColor: "#008080", color: "white", padding: "0.5rem 1rem", borderRadius: "5px", border: "none", cursor: "pointer", transition: "background-color 0.3s ease" }}>
            Contact Us
          </button>
          <button style={{ backgroundColor: "#0077cc", color: "white", padding: "0.5rem 1rem", borderRadius: "5px", border: "none", cursor: "pointer", transition: "background-color 0.3s ease" }}>
            LinKeldn
          </button>
          <button style={{ backgroundColor: "#00cc66", color: "white", padding: "0.5rem 1rem", borderRadius: "5px", border: "none", cursor: "pointer", transition: "background-color 0.3s ease" }}>
            WhatsApp
          </button>
          <button style={{ backgroundColor: "#ff5050", color: "white", padding: "0.5rem 1rem", borderRadius: "5px", border: "none", cursor: "pointer", transition: "background-color 0.3s ease" }}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
