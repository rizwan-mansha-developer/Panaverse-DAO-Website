'use client';

import QuarterBox from '@/shared/QuarterBox';
import { QuartersData } from './CoreTracks';
import Wrapper from '@/shared/Wrapper';
import Link from 'next/link';
import React, { useState } from 'react';
import Image1 from '@/assets/images/image-1.png';
import Image2 from '@/assets/images/image-2.png';
import Image3 from '@/assets/images/image-3.png';
import Image4 from '@/assets/images/image-4.png';
import Image5 from '@/assets/images/image-5.png';
import Image6 from '@/assets/images/image-6.png';
import SpecilizedPrograms from '@/shared/SpecilizedPrograms';
import ProgramData from '@/shared/specializedProgramsData';

const SpecialiedTracks = () => {
  const [selectedItem, setSelectedItem] = useState('cn');

  const selectedItemData = ProgramData.find(item => item.slug === 'cn');

  return (
    <section className="max-w-7xl mr-[2.5%] mt-20">
      <Wrapper>
        <div className="">
          <h4 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl  font-semibold ">
            Specialized Tracks:
          </h4>
          <p className="max-w-xl text-xl my-6 text-gray-700">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:
          </p>
        </div>

        <div className="flex flex-col lg:flex-row">
          <div className="px-10 pt-10 border rounded-2xl basis-8/12">
            {/* left side */}
            <p className="font-medium text-primary mb-2">Specialized Program</p>
            <h2 className="font-medium text-3xl max-w-lg">
              Web 3.0 (Blockchain) and Metaverse Specialization
            </h2>
            <p className="max-w-xl text-xl my-6 text-gray-700">
              This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse experiences for the next
              generation of the internet by specializing in building worlds that
              merge the best of cutting-edge decentralized distributed
              blockchains with 3D metaverse client experiences.
            </p>
            <p className="underline font-medium text-primary mb-2">
              <Link href={'#'}>Learn More &gt; </Link>
            </p>

            {/* Quarters Box */}
            <div className="  grid grid-cols-1 items-center  md:grid-cols-2 gap-x-6 lg:gap-x-12 mt-8">
              <QuarterBox
                header={'Quarter IV'}
                description={
                  'W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform'
                }
                number={4}
                haveBorder={false}
                numberTop="top-10"
              />
              <QuarterBox
                header={'Quarter V'}
                description={
                  'W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform'
                }
                number={5}
                haveBorder={false}
                numberTop="top-10"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="mx-16 mt-10">
            {ProgramData.map(item => (
              <div key={item.slug}>
                <SpecilizedPrograms
                  imageSrc={item.imageSrc}
                  alt={item.alt}
                  programName={item.header}
                />
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecialiedTracks;
