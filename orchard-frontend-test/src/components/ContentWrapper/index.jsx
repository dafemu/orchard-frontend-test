import './ContentWrapper.scss';

export default function ContentWrapper({children}) {
  return (
    <main className="content-wrapper">
        {children}
    </main>
  )
}
