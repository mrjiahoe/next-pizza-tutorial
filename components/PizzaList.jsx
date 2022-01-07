import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

function PizzaList() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
			<p className={styles.desc}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sunt
				quo alias, perferendis aspernatur consequuntur autem distinctio sint
				accusantium corporis dolorum repellendus consequatur, tempore deleniti!
			</p>
			<div className={styles.wrapper}>
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
				<PizzaCard />
			</div>
		</div>
	);
}

export default PizzaList;
