import LineGraph from "../Components/LineGraph";
import Selector from "../Components/Selector";
const TraineeExamDetails = () => {
  return (
    <>
      <div className="flex-1 m-10" >
      <h1 class="pt-5 pl-5 pr-10 font-extrabold text-3xl font-serif">Trainee Exams Details</h1>
      < Selector/>
      < LineGraph />
      </div>
    </>
  );
};

export default TraineeExamDetails;
