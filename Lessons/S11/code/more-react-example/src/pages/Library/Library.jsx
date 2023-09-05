import Image from "../../assets/images/libraries.png";
import SampleTable from "../../components/Table/SampleTable";
// import SampleTable from "../../components/Table/TableSample";

function Library() {
  return (
    <div>
      <br />
      <br />
      <h1>React UI Libraries</h1>
      <p>
        By using pre-built UI components from a library, you can save a
        significant amount of development time. Instead of building each UI
        element from scratch, you can simply integrate the pre-built components
        into your application.
      </p>
      <hr />

      <img src={Image} alt={"libraries names"} />
      <hr />
      <h2>Sample Component from ANT design</h2>
      <SampleTable />
    </div>
  );
}

export default Library;
