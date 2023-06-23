'use client'
import { signOut, useSession } from 'next-auth/react'
import { BellIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import InfoCard from '@/Components/InfoCard';
import a from '../assets/a.svg'
import b from '../assets/b.svg'
import c from '../assets/c.svg'
import d from '../assets/d.svg'
import Chart from '@/Components/Chart'
import Pie from '@/Components/Pie';

const data =[{
  title : 'Total Revenues',
  value : '$2,129,430',
  icon : a
},{
  title : 'Total Transactions',
  value : '1,520',
  icon : b
},{
  title : 'Total Likes',
  value : '9,721',
  icon : c
},{
  title : 'Total Users',
  value : '892',
  icon : d
}]

interface Card {
  title: string,
  value: string,
  icon: HTMLImageElement }

export default function Home() {


  const {data : session} = useSession();
  return (
    <main className=" col-span-3 py-5 px-4 lg:px-0 overflow-y-scroll lg:overflow-hidden flex flex-col text-black  lg:scale-95   ">
      <div className=' flex justify-between w-full '>
          <p className=' font-bold font-monty text-2xl'>Dashboard</p>
          <div className=' flex space-x-5 items-center'>
            <div className=' lg:flex hidden  rounded-[10px]'>
              <input className=' px-4 rounded-[10px] h-[30px]' placeholder=' Search...'/>
            </div>
            <BellIcon className="h-6 w-6" />
           {session && <img onClick={()=>signOut()} src={session?.user?.image!} alt='' className='h-7 cursor-pointer lg:h-8 xl:h-10 aspect-square rounded-full' />} 
          </div>
      </div>
      <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10'>
          {data.map(({ title, value, icon} : Card ,index :number ) => <InfoCard title={title} value={value} icon={icon} index={index} key={index}  />)}
      </div>
      <div className=' mt-8 pt-8 pb-6  rounded-[10px] bg-white flex flex-col flex-grow max-h-[360px] '>
        <div className=' px-10 pb-8 flex justify-between items-center'>
          <div>
            <p className=' text-lg font-monty font-bold'>Activities</p>
             <p className=' font-monty text-[#858585] text-sm'>May - June 2021</p>
          </div>
          <div className=' flex space-x-8 font-lato text-sm'>
            <div className=' flex items-center space-x-2'>
              <div className=' h-2 aspect-square rounded-full bg-[#E9A0A0]' />
              <p>Guest</p>
            </div>
            <div className=' flex items-center space-x-2'>
              <div className=' h-2 aspect-square rounded-full bg-[#9BDD7C]' />
                <p>User</p>
            </div>
          </div>
        </div>
        
        <Chart />
      </div>
      

      <div className=' grid gap-9 grid-cols-1 lg:grid-cols-2 mt-8'>
      <div className=' bg-white pt-[30px] flex flex-col p-10 py-8 rounded-[10px]'>
          <div className=' flex  bg-white items-center pb-6 justify-between'>
            <p className=' font-monty font-bold text-lg'>Top products</p>
            <p className=' text-[#858585] font-monty text-xs'>May - June 2021</p>
          </div>  
          <div className='flex flex-grow '>
            <div className=' w-full '>
              <Pie />
            </div>
            <div className=' w-full'>
                <div className=' flex flex-col space-y-5'>
                  <div className=' flex space-x-2'>
                  <div className=' h-3 aspect-square rounded-full bg-[#98D89E]' />
                    <div>
                    <p className=' font-monty font-bold text-sm'>Basic Tees</p>
                    <p className=' font-lato text-xs text-[#858585]'>55%</p>
                    </div>
                    
                  </div>
                  <div className=' flex space-x-2'>
                  <div className=' h-3 aspect-square rounded-full bg-[#F6DC7D]' />
                    <div>
                    <p className=' font-monty font-bold text-sm'>Custom Short Pants</p>
                    <p className=' font-lato text-xs text-[#858585]'>31%</p>
                    </div>
                  </div>
                  <div className=' flex space-x-2'>
                  <div className=' h-3 aspect-square rounded-full bg-[#EE8484]' />
                    <div>
                    <p className=' font-monty font-bold text-sm'>Super Hoodies</p>
                    <p className=' font-lato text-xs text-[#858585]'>14%</p>
                    </div>
                  </div>

                </div>
            </div>
          
          </div>
        </div>
        <div className=' bg-white pt-[30px] p-10 py-8 rounded-[10px]'>
          <div className=' flex  bg-white items-center pb-6 justify-between'>
            <p className=' font-monty font-bold text-lg'>Today’s schedule</p>
            <p className=' text-[#858585] font-monty text-xs'>See All</p>
          </div>  
          <div className=' border-l-2 border-[#9BDD7C] pl-4 pt-[2px] pb-1'>
            <p className=' text-sm font-bold font-lato text-[#666666]'>Meeting with suppliers from Kuta Bali</p>
            <p className=' text-[#999999] font-lato text-xs'>14.00-15.00</p>
            <p className=' text-[#999999] font-lato text-xs'>at Sunset Road, Kuta, Bali </p>
          </div>
          <div className=' border-l-2 border-[#6972C3] mt-3 pl-4 pt-[2px] pb-1'>
            <p className=' text-sm font-bold font-lato text-[#666666]'>Check operation at Giga Factory 1</p>
            <p className=' text-[#999999] font-lato text-xs'>18.00-20.00</p>
            <p className=' text-[#999999] font-lato text-xs'>at Central Jakarta  </p>
          </div>
        </div>

      </div>
    </main>
  )
}
