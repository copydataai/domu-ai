export default function NavBar() {
  return (
    <navbar className="flex justify-between items-center mx-auto p-4 ">
      <div className="text-4xl font-bold font-raleway">domu</div>
      <a
        href="https://calendly.com/isabela-domu/discovery-call-domu"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800"
      >
        Schedule a call
      </a>
    </navbar>
  );
}
