import React from 'react';
import Layout from 'components/layout';
import ProfileSection from './profileSection';

export default function About() {
  return (
    <Layout title="MyBrand | About" description="About me and my services">
      <div className="relative w-full">
        <ProfileSection />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: 123
    }
  };
}
