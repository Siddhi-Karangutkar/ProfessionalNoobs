import { supabase } from '@/lib/supabase'; // Required for auth listener

// export const useAuth = () => {
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//       const { data: { subscription } } = supabase.auth.onAuthStateChange(
//         async (event, session) => {
//           if (event === 'SIGNED_IN') {
//             setUser(session?.user ?? null);
//           }
//         }
//       );
    
//       return () => subscription.unsubscribe();
//     }, []);
  
//     return { user };
//   };

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // Check existing session
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };
    
    getSession();
    return () => subscription.unsubscribe();
  }, []);

  return { user, loading };
};