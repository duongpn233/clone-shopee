import SlideBanner from "./slideBanner/slideBanner";
import UtilityBar from "./utilityBar/utilityBar";
import './homeContainer.css'
import Category from "./category/category";
import FlashSaleBar from "./flashSaleBar/flashSaleBar";
import MallBanner from "./mallBanner/mallBanner";
import TrendBar from "./trendBar/trendBar";
import TopSearchBar from "./topSearchBar/topSearchBar";
import SuggestedProducts from "./suggestedProducts/suggestedProducts";
function HomeContainer() {
    return (
        <div className="home-container">
            <div className="grid wide">
                <SlideBanner />
                <UtilityBar />
                <Category />
                <FlashSaleBar />
                <MallBanner />
                <TrendBar />
                <TopSearchBar />
                <SuggestedProducts />
            </div>
        </div>
    )
}

export default HomeContainer;