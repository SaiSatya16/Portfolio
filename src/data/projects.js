const projects = [
  {
    id: 1,
    title: "Grocery Store",
    image: "ml-lab.png",
    url: "https://drive.google.com/file/d/1djHYBTG37ya6aZsfEr-xSBapag3Er5nw/view",
    category: "Web Development",
    tags: ["Flask", "Jinja2", "HTML/CSS/Bootstrap", "SQLite", "SQLAlchemy"],
    description:
      "I developed a multi-user grocery store web app using Flask, Jinja2, and Bootstrap. It featured Admin and User logins, category and product management, dynamic pricing, and robust search capabilities. Users could add products from various categories to a shopping cart, with real-time stock updates and pricing. I also implemented APIs for efficient section and product interactions, including data validation. This project comes under the Course work of Modern Application Development I, IIT Madras BS in Data Science and Applications",
  },
  {
    id: 2,
    title: "Agricultural Reforms using Data Science",
    image: "smartchange.png",
    url: "https://github.com/SaiSatya16/SEPM-Project-Agricultural_Reforms",
    category: "Machine Learning",
    tags: ["Python", "Pandas", "Flask", "cikit‑learn", "HTML/CSS/Bootstrap"],
    description:
      "I created a full-stack web app using Flask for agricultural management, offering crop and fertilizer recommendations based on input parameters. The user-friendly interface provides information on foreign crops, aiding farmers in decision-making. Leveraging Flask, SQLite, HTML5, CSS, and JavaScript, along with data analysis libraries like NumPy and Pandas, this project empowers farmers with data-driven insights for informed agriculture practices",
  },
  {
    id: 3,
    title: "Rhythm Generator",
    image: "smartmonitor.png",
    url: "https://github.com/Data-Science-Community-SRM/Rhythm-Generator",
    category: "Machine Learning",
    tags: ["TensorFLow", "Flask", "MIDI", "TransformerXL"],
    description:
      "Created a Rhythm Generator using the ComMu dataset with 10,000+ MIDI files. Enhanced the TransformerXL model’s architecture with custom attention and recurrence mechanisms to capture complex temporal patterns for generating coherent rhythm sequences. Deployed through a Flask API with ReactJS. Evaluated on diverse inputs, achieving a human-rated average score of 4.5/5 for high-quality, varied rhythms",
  },
];

export default projects;
