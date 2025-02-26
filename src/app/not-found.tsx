import Image from 'next/image';
import bananaImage from '../../public/banana.svg';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className='flex-1 flex flex-col justify-center items-center px-8 py-2'>
      <Image src={bananaImage} alt="Banana descascada" width={400} height={400} />
      <h1 className='text-4xl text-emerald-700 font-primary mb-5'>Oops! Você escorregou na casca de banana!</h1>
      <p className='text-xl text-emerald-500 font-secondary mb-10'>
        A página que você está procurando escorregou para fora do nosso site. <br /> Volte para a{' '}
        <Link href="/" className='underline text-emerald-600 hover:text-emerald-300'>Página Inicial</Link> antes que outro acidente frutado aconteça!
      </p>
    </div>
  );
}