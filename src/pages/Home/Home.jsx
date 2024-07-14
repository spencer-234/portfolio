import "./home.scss";
import Title from "../../components/Title/Title"
import DevSvg from "../../components/DevSvg/DevSvg";

const Home = () => {




    return (
        <main className="home">
            <Title />
            <section className="intro">
                <div className="svg-container">
                    <DevSvg />
                </div>
            </section>
        </main>
    )
}

export default Home