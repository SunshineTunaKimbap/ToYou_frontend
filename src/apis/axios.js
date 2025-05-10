import axios from "axios";
// axios 백엔드
const url = "https://port-0-toyou-backend-maiqlrr889248347.sel4.cloudtype.app/";

export const get_letters = async (name) => {
  const letters = await axios({
    method: "get",
    url: url + "api/search/" + name,
  });
  console.log(letters.data);
  return letters.data;
};

export const get_letters_w_group = async (name, group_id) => {
  const letters = await axios({
    method: "get",
    url: url + "api/search/" + name + "/" + group_id,
  });
  console.log(letters.data);
  return letters.data;
};

export const post_letters = async ({
  name_sender,
  name_receiver,
  content,
  group_id = 1,
  design_id = 1,
  pin = "",
  content_secret = "",
}) => {
  const data = {
    name_sender: name_sender,
    name_receiver: name_receiver,
    content: content,
    pin: pin,
    content_secret: content_secret,
    group_receiver_id: group_id,
    design_id: design_id,
  };

  try {
    const res = await axios.post(url + "api/post/", data);
    console.log(res.data);
    alert(res.data.message || "편지 전송 성공!");
  } catch (err) {
    console.error(err);
    alert("전송 실패: " + (err.response?.data?.error || err.message));
  }
};

export const unlock_letters = async (letter_id, pin) => {
  const data = {
    id: letter_id,
    pin: pin,
  };

  try {
    const res = await axios.post(url + "api/unlock/", data);
    console.log(res.data);
    alert(res.data.letter.content_secret || "편지 열기 성공!");
  } catch (err) {
    console.error(err);
    alert("편지 열기 실패: " + (err.response?.data?.error || err.message));
  }
};