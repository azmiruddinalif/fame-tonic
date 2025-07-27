import Banner from "@/components/banner";
import Container from "@/components/common/Container";
import DiscountBar from "@/components/common/DiscountBar";
import Header from "@/components/common/Header";

export default function Home() {
  return (
    <>
      <DiscountBar />
      <Container>
        <div>
          <Header />
          <Banner />
        </div>
      </Container>
    </>
  );
}
