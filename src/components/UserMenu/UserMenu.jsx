import { useSelector } from "react-redux";
import { selectorUserName } from "../../redux/auth/selectors";

export default function UserMenu() {
  const userName = useSelector(selectorUserName);
  return <div>Welcome `${userName}` </div>;
}
