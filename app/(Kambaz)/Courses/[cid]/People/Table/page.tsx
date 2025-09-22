export default function PeopleTable() {
  return (
    <div id="wd-people-table" style={{ padding: "20px" }}>
      <h2>People</h2>
      <p>This is the People page for the course. Later chapters will show a table of enrolled students and faculty here.</p>

      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice Wonderland</td>
            <td>Faculty</td>
            <td>alice@neu.edu</td>
          </tr>
          <tr>
            <td>Bob Marley</td>
            <td>Student</td>
            <td>bob@neu.edu</td>
          </tr>
          <tr>
            <td>Charlie Brown</td>
            <td>Student</td>
            <td>charlie@neu.edu</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
