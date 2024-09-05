const SpaceFooter = () => {
  return (
    <footer className="text-light">
      <div className="d-flex flex-column align-items-center  gap-1">
        <p className="mt-3">SpaceX © 2024</p>
        <div className="d-flex gap-3 mb-4">
          <a
            href="https://www.spacex.com/media/privacy_policy_spacex.pdf"
            className="text-light link-underline link-underline-opacity-0"
          >
            PRIVACY POLICY
          </a>
          <a href="https://www.spacex.com/supplier/" className="text-light link-underline link-underline-opacity-0">
            SUPPLIERS
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SpaceFooter;
