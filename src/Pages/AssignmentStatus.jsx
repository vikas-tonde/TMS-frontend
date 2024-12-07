import AssignmentLineGraph from "../Components/AssignmentLineGraph";
import ModuleSelector from "../Components/ModuleSelector";

const AssignmentStatus = () => {
  return (
    <>
      <div className="flex-1 m-10" >
      <h1 class="pt-5 pl-5 pr-10 font-extrabold text-3xl font-serif">Trainee Assignments Details</h1>
      < ModuleSelector/>
      < AssignmentLineGraph />
 

      </div>
    </>
  );
};
  
  export default AssignmentStatus;
  