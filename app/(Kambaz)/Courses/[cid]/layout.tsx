import { ReactNode } from "react";
import CourseNavigation from "./Navigation";

type ParamsType = { cid: string } | Promise<{ cid: string }>;
type ResolvedParams = { cid?: string; id?: string };


export default async function CoursesLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: ParamsType;
}) {
  const resolvedParams = (await Promise.resolve(params)) as ResolvedParams;

  const cid = resolvedParams.cid ?? resolvedParams.id ?? "unknown";

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
