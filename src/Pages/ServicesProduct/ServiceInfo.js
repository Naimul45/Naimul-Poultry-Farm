import React from 'react';
import { useQuery } from '@tanstack/react-query'
import ServicesProduct from './ServicesProduct';
import Navbar from '../../Shared/Navbar/Navbar';

const ServiceInfo = () => {
  const { data: services = [], isLoading, } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/addservice')
      const data = await res.json()
      return data
    }


  })
  return (
    <div>
      <Navbar></Navbar>
      <div className="grid lg:grid-cols-3 gap-2 grid-cols-1 mt-10 ml-10">
        {
          services?.map(service => <ServicesProduct
            service={service}>
          </ServicesProduct>
          )
        }
      </div>

    </div>
  );
};

export default ServiceInfo;