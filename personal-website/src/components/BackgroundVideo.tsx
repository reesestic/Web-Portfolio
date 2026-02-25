export default function BackgroundVideo() {
    return (
        <video autoPlay muted loop className="bg-video">
            <source src="/website-bg-vid.mp4" type="video/mp4" />
        </video>
    );
}