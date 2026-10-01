import "./App.css";
import ListWithDragDrop from "./components/ListWithDragDrop";

const listItems = [
  {
    id: 1,
    name: "Attend NxtWave Generative AI Workshop",
  },
  {
    id: 2,
    name: "Continue with the DSA Problem  Solving",
  },
  {
    id: 3,
    name: "Review React Documentation",
  },
  {
    id: 4,
    name: "Build a React Project",
  },
  {
    id: 5,
    name: "Continue with the NxtWave Full Stack Web Development Course",
  }
  // {
  //   id: 6,
  //   name: "Continue with the Portfolio Project ",
  // },
  // {
  //   id: 7,
  //   name: "Continue with the NxtWave Data Structures and Algorithms Course",
  // },
  // {
  //   id: 8,
  //   name: "Continue with the Aptitude & Reasoning new Session",
  // },
  // {
  //   id: 9,
  //   name: "Continue with the NxtWave System Design Course",
  // },
  // {
  //   id: 10,
  //   name: "Continue with the NxtWave Interview Preparation Course",
  // },
];

function App() {
  return (
    <>
      <ListWithDragDrop listItems={listItems} />
    </>
  );
}

export default App;
