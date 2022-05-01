import axios from "axios";
import { useCallback, useState } from "react"
import { useHistory } from "react-router-dom";
import { User } from "../types/user";
import { useLoginUser } from "./useLoginUser";
import { useMessage } from "./useMessage";

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const [loading, setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          setLoginUser(res.data);
          showMessage({title: "ログインしました。", status: "success"});
          history.push('/home');
        } else {
          showMessage({title: "ユーザが見つかりません。", status: "error"});
          setLoading(false);
        }
      })
      .catch(() => {
        showMessage({ title: "ユーザーが見つかりません", status: "error" });
        setLoading(false);
      });
      // .finally(() => setLoading(false));
  }, [history, showMessage, setLoginUser]);
  return { login, loading }
}