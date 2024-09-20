export const NavBar = () => {
  return (
    <navbar className="flex justify-between items-center mx-auto p-4 ">
      <div className="text-4xl font-bold">domu</div>
      <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md">
        Schedule a call
      </button>
    </navbar>
  );
};
