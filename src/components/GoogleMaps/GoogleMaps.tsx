const GoogleMaps = () => {
  return (
    <section className="px-10 h-full self-center min-[1200px]:px-20 max-[1200px]:mb-20 min-[1200px]:pt-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48488.27353043376!2d-74.53943503128397!3d40.574340131872844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b8cca13e8307%3A0xd9ebb9b5c074ea61!2sMiddlesex%2C%20NJ%2008846!5e0!3m2!1sen!2sus!4v1698706289978!5m2!1sen!2sus"
        width="100%"
        height="80%"
        className="rounded-lg shadow-lg border-2 border-seaserpent"
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default GoogleMaps;
