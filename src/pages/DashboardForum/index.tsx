import CardPosts from "../../components/Dashboard/CardPosts";
import HeaderDashboard from "../../components/Dashboard/HeaderDashboard";
import Footer from "../../components/Footer";
import { Container } from "./style";
import { DivButton, DivUser } from "./style";

const Forum = () => {
  return (
    <>
      <HeaderDashboard />
      <Container>
        <DivUser>
          <img alt="" />
          <div>
            <h4>Nome do Dev</h4>
            <h5>Ocupação do dev</h5>
          </div>
        </DivUser>

        <section>
          <h5>Compartilhe conosco!</h5>
          <form>
            <textarea
              name="post"
              placeholder="O que temos pra hoje?"
            ></textarea>
            <DivButton>
              <button>Postar</button>
            </DivButton>
          </form>

          {/* 
        Fazer map dos posts */}

          <ul>
            <CardPosts />
            <CardPosts />
          </ul>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default Forum;
