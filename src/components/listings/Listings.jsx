import React, { useState } from "react"
import Back from "../common/Back"
import RecentCard from "../home/recent/RecentCard"
import "../home/recent/recent.css"
import img from "../images/about.jpg"
import { list } from "../data/Data"
import AdvancedFilter from "../filter/AdvanceFilter"


const Listings = () => {
  const [filteredList, setFilteredList] = useState(list);
  return (
    <>
      <section className='blog-out mb' style={{maxWidth:'100%'}}>
        {/* <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} /> */}
        <AdvancedFilter data={list} onFilterUpdate={setFilteredList} />
        <div className='container recent'>
          <RecentCard list={filteredList} />
        </div>
      </section>
    </>
  )


}

export default Listings
