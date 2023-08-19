import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('../components/Dashboard').then((mod) => mod.Dashboard), {
  ssr: false,
});

const Home = () => <Dashboard />;

export default Home;
