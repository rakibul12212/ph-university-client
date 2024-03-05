import { Layout, Menu } from "antd";
import { sideberItemsGenerator } from "../../utils/sideberItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { StudentPaths } from "../../routes/student.routes";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sideber = () => {
  const role = "admin";
  let sideberItems;

  switch (role) {
    case userRole.ADMIN:
      sideberItems = sideberItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sideberItems = sideberItemsGenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sideberItems = sideberItemsGenerator(StudentPaths, userRole.STUDENT);
      break;
  }
  return (
    <div>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
      >
        <div
          style={{
            color: "white",
            textAlign: "center",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>PH University</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sideberItems}
        />
      </Sider>
    </div>
  );
};

export default Sideber;
