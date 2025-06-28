import "./App.css";
import Welcome from "./components/Welcome";
import Greetings from "./components/Greetings";
import MemberProfile from "./components/MemberProfile";

function App() {
  // const name = "Shahid";
  const members = [
    {
      id: 1,
      name: "Sohel Shahid",
      imageLink: "https://randomuser.me/api/portraits/men/47.jpg",
      email: "sohel@example.com",
      role: "Admin",
    },
    {
      id: 2,
      name: "Amina Rahman",
      imageLink: "https://randomuser.me/api/portraits/men/21.jpg",
      email: "amina@example.com",
      role: "Editor",
    },
    {
      id: 3,
      name: "Tanvir Hasan",
      imageLink: "https://randomuser.me/api/portraits/women/74.jpg",
      email: "tanvir@example.com",
      role: "User",
    },
    {
      id: 4,
      name: "Farhana Islam",
      imageLink: "https://randomuser.me/api/portraits/men/65.jpg",
      email: "farhana@example.com",
      role: "Moderator",
    },
    {
      id: 5,
      name: "Riyad Ahmed",
      imageLink: "https://randomuser.me/api/portraits/men/46.jpg",
      email: "riyad@example.com",
      role: "Admin",
    },
    {
      id: 6,
      name: "Mim Akter",
      imageLink: "https://randomuser.me/api/portraits/women/46.jpg",
      email: "mim@example.com",
      role: "User",
    },
    {
      id: 7,
      name: "Zahidul Karim",
      imageLink: "https://randomuser.me/api/portraits/men/29.jpg",
      email: "zahidul@example.com",
      role: "Editor",
    },
    {
      id: 8,
      name: "Sumaiya Sultana",
      imageLink: "https://randomuser.me/api/portraits/women/37.jpg",
      email: "sumaiya@example.com",
      role: "User",
    },
    {
      id: 9,
      name: "Hasib Mahmud",
      imageLink: "https://randomuser.me/api/portraits/women/40.jpg",
      email: "hasib@example.com",
      role: "Moderator",
    },
    {
      id: 10,
      name: "Tania Khatun",
      imageLink: "https://randomuser.me/api/portraits/women/74.jpg",
      email: "tania@example.com",
      role: "User",
    },
  ];

  return (
    <>
      {/* <h1 className="bg-amber-400">Hello</h1>
      <Welcome />
      <Greetings name={name} />
      <Greetings name="Aadil" /> */}

      {/* profile card */}
      <div className="min-h-screen p-5">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-5">
          Team Member List App
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <MemberProfile
              key={member.id}
              name={member.name}
              role={member.role}
              imageLink={member.imageLink}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
