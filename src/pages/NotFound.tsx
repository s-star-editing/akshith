
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-soft-yellow/20 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-soft-peach/50 rounded-full p-4">
            <AlertTriangle className="h-12 w-12 text-primary" />
          </div>
        </div>
        
        <h1 className="text-3xl font-serif font-bold mb-4 text-primary">Page Not Found</h1>
        
        <p className="text-muted-foreground mb-6">
          Oops! We couldn't find the page you were looking for. Let's get you back to the celebration!
        </p>
        
        <Link to="/">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
