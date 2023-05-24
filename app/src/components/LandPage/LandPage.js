const LandPage=()=>{
    return(
        <div className="App" >
        <h1 className="mainTitle text-bg-primary p-3 card-header">Welcome</h1>
        <h3 className="subTitle">Task assignation is an application to manage task in a team</h3>
        <p>Team consists of name and unique id. fore every team it can be created users and then assign task to those users with some restrictions:</p>
        <ul className="list">
          <li>Exclusive roles: Admin, supervisor and employee</li>
          <li>Department is freely to choose by admins</li>
          <li>Every team is independant and can't relate to other teams</li>
          <li>Only admins can create new users</li>
          <li>Supervisors can assign/edit tasks to theirselves and employee in the same department</li>
          <li>Employees can only edit their own tasks in the fields if they are completed and comments </li>
          <li>Tasks can only be viewed by the level of accesibility, role and department</li>
        </ul>
    
      </div>
    );
}

export default LandPage;