import { BsMoon } from "react-icons/bs";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
const Header = () => {
  return (
    <header className=" py-6 container flex items-center justify-between">
      <div>Logo</div>
      <div className=" flex items-center gap-x-5">
        <div className=" flex items-center gap-2">
          <BsMoon className=" text-2xl text-primary" />
          <Switch />
        </div>
        <Button className="hover:bg-opacity-25  h-[42px]">Logout</Button>
      </div>
    </header>
  );
};

export default Header;
