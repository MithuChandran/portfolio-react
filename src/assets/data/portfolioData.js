import travel from "../images/travel.jpg";
import onlineShopping from "../images/onlineShopping.jpg";
import theatre from "../images/theatre.jpg";
import acedemic from "../images/acedemic.jpg";
import calculator from "../images/calculator.jpg";
import sales from "../images/sales.jpg";
import home from "../images/home.jpg";
import Vehicle from "../images/vehicle.jpg";
import exam from "../images/exam.jpg";

const portfolios = [
  {
    id: "01",
    imgUrl: travel,
    title: "TripBoss - Travel Website",
    description:
      "A travel website built using HTML, CSS, and JavaScript. It provides a user interface for users to browse and book travel destinations, view travel packages, and explore various travel options.",
    technologies: ["HTML", "CSS", "JavaScript"],
    siteUrl: "https://github.com/MithuChandran/travel_website.git",
  },
  {
    id: "02",
    imgUrl: onlineShopping,
    title: "Online Shopping System",
    description:
      "An Online shopping system that utilizes Java OOP concepts and GUI implemented using Swing. It provides functionality for users to browse and purchase products, manage their shopping cart, and process payments.",
    technologies: ["Java", "Swing"],
    siteUrl: "https://github.com/MithuChandran/online_shopping_system.git",
  },
  {
    id: "03",
    imgUrl: theatre,
    title: "Theatre Booking Project",
    description:
      "A software application developed using Java for managing a theatre. It provides features for booking tickets, managing shows, and tracking seat availability. The application allows users to view show schedules, select seats, and make online payments. It includes an admin panel for managing shows, seats, and user bookings.",
    technologies: ["Java"],
    siteUrl: "https://github.com/MithuChandran/theatre_booking_java.git",
  },
  {
    id: "04",
    imgUrl: acedemic,
    title: "Academic Progression Predictor",
    description:
      "A Python Academic Progression Predictor program, allowing university staff to input students' credit details for predicting progression outcomes. The program validates inputs, generates histograms, and offers extensions for data storage, facilitating accurate analysis of student progression.",
    technologies: ["Python"],
    siteUrl:
      "https://github.com/MithuChandran/academic_progression_predictor.git",
  },
  {
    id: "05",
    imgUrl: calculator,
    title: "Simple Calculator Program",
    description:
      "A Python program for a calculator with a history feature. The calculator supports basic arithmetic operations such as addition, subtraction, multiplication, and division, as well as exponentiation. It ensures input validation to handle errors gracefully and provides a user-friendly interface with prompts for input.",
    technologies: ["Python"],
    siteUrl: "https://github.com/MithuChandran/calculator_python.git",
  },

  {
    id: "06",
    imgUrl: sales,
    category: "Machine Learning",
    title: "Advertisement Sales Prediction using Logistic Regression",
    description:
      "A predictive model built using logistic regression to forecast advertisement sales based on existing customer data. Leveraging the power of machine learning, this project aims to assist businesses in optimizing their advertising strategies by identifying potential customers likely to make a purchase.",
    technologies: ["Python", "Jupytor Notebook"],
    siteUrl:
      "https://github.com/MithuChandran/advertisement_sale_prediction.git",
  },
  {
    id: "07",
    imgUrl: home,
    category: "Machine Learning",
    title: "House Price Prediction Using Linear Regression",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["Python", "Jupytor Notebook"],
    siteUrl: "https://github.com/MithuChandran/house_price_prediction.git",
  },
  {
    id: "08",
    imgUrl: exam,
    category: "Machine Learning",
    title: "Exam Marks Prediction Using Linear Regression",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["Python", "Jupytor Notebook"],
    siteUrl: "https://github.com/MithuChandran/exam_marks_prediction.git",
  },
  {
    id: "09",
    imgUrl: Vehicle,
    category: "Machine Learning",
    title: "Vehicle Detection Using Deep Learning",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vitae sunt magnam numquam esse ipsam? Quis qui enim, temporibus dignissimos atque repellendus amet a velit. Dolorem quidem animi doloribus saepe!",
    technologies: ["Python", "Jupytor Notebook"],
    siteUrl: "https://github.com/MithuChandran/vehicile_detection.git",
  },
];

export default portfolios;
