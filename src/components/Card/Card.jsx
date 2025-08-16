// import homerSimpson from "./data.js";

import "./styles.css";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function Card() {

//   return (
//     <div className="card">
//       <img
//         className="card__avatar"
//         src="https://upload.wikimedia.org/wikipedia/en/0/https://static.wikia.nocookie.net/p__/images/3/3c/HomerSimpson.png/revision/latest?cb=20210813010304&path-prefix=protagonist/Homer_Simpson_2006.png"
//         alt="Homer Simpson"
//       />
//       <h2 className="card__name">Гомер Симпсон</h2>
//       <p className="card__info">
//         Род деятельности: инспектор по безопасности на Спрингфилдской АЭС
//       </p>
//       <p className="card__info">
//         Хобби: любовь к пончикам, боулингу, просмотру телевизора и поеданию
//         хот-догов
//       </p>
//     </div>
//   );
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// props - это обьект, с помощью которого мы передаем данные из родительского компонента в дочерний

function Card({ avatarURL = "", name = "Name", job = "-", hobby = "-" }) {
  // const homerSimpson = {
  //   avatarURL:
  //     "https://medias.artmajeur.com/standard/15687763_img-20220426-182732.jpg?v=1738650820",
  //   name: "Гомер Симпсон",
  //   job: "инспектор по безопасности на Спрингфилдской АЭС",
  //   hobby:
  //     "любовь к пончикам, боулингу, просмотру телевизора и поеданию хот-догов",
  // };

  return (
    <div className="card">
      <img className="card__avatar" src={avatarURL} alt="Homer Simpson" />
      <p className="card__name">имя и фамилия: {name}</p>
      <p className="card__info">род деятельности: {job}</p>
      <p className="card__info">хобби: {hobby}</p>
    </div>
  );
}

export default Card;
