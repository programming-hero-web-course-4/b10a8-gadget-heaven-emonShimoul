import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Dashboard = () => {
  return (
    <div>
      <Tabs className="mb-12">
        <div className="bg-[#9538E2] py-10 my-4">
          <div className="text-center text-white mb-10">
            <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
            <p className="w-1/2 mx-auto">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
          <TabList className=" flex justify-center items-center gap-6">
            <Tab className="border border-white text-white px-10 py-1 rounded-full cursor-pointer font-bold">
              Cart
            </Tab>
            <Tab className="border border-white text-white px-10 py-1 rounded-full cursor-pointer font-bold">
              WishList
            </Tab>
          </TabList>
        </div>

        <div className="w-2/3 mx-auto">
          <TabPanel>
            <div className="flex justify-between items-center mt-10">
              <h4 className="text-lg font-bold">Cart</h4>
              <div className="flex gap-4 items-center">
                <h4 className="text-lg font-bold">Total Cost: 1000</h4>
                <button className="border border-[#9538E2] px-4 py-2 rounded-full text-[#9538E2] font-bold cursor-pointer">
                  Sort by Price
                </button>
                <button className="px-6 py-2 rounded-full bg-[#9538E2] text-white cursor-pointer">
                  Purchase
                </button>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex justify-between items-center mt-10">
              <h4 className="text-lg font-bold">WishList</h4>
              <div className="flex gap-4 items-center">
                <h4 className="text-lg font-bold">Total Cost: 1000</h4>
                <button className="border border-[#9538E2] px-4 py-2 rounded-full text-[#9538E2] font-bold cursor-pointer">
                  Sort by Price
                </button>
                <button className="px-6 py-2 rounded-full bg-[#9538E2] text-white cursor-pointer">
                  Purchase
                </button>
              </div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Dashboard;
