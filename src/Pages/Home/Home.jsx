import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Banner from "../../components/Banner/Banner";
import OurHottestOffer from "../../components/OurHottestOffer/OurHottestOffer";
import ShopByCategory from "../../components/ShopByCategory/ShopByCategory";

const Home = () => {
    const { isLogin } = useContext(AuthContext)
    if (isLogin) {
        console.log(isLogin)
    }
    return (
        <div>
            <Banner></Banner>
            <OurHottestOffer></OurHottestOffer>
            <ShopByCategory></ShopByCategory>

        </div>
    );
};

export default Home;