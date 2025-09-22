import { ReactNode } from "react";
import CourseNavigation from "./Navigation";


export default async function CoursesLayout(props: any) {
  const { children } = props;

  let params = props.params;
  if (params && typeof params.then === "function") {
    params = await params;
  }

  const cid = params?.cid ?? params?.id ?? "unknown";

  return (
    <div id="wd-courses">
      <h2>Courses {cid}</h2>
      <hr />
      <table>
        <tbody>
          <tr>
            <td valign="top" width="200">
              <CourseNavigation />
            </td>
            <td valign="top" width="100%">
              {children}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
