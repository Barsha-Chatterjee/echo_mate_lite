import { findUserForAuth, findUserWithEmailAndPassword } from '@/api-lib/db';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { getMongoDb } from '../mongodb';

passport.serializeUser((user, done) => {
  console.log('serializeUser', user);
  done(null, user._id);
});

passport.deserializeUser(async (req, id, done) => {
  const db = await getMongoDb();
  const user = await findUserForAuth(db, id);
  console.log('deserializeUser', user);
  done(null, user);
});

passport.use(
  new LocalStrategy(
    { usernameField: 'email', passReqToCallback: true },
    async (req, email, password, done) => {
      const db = await getMongoDb();
      const user = await findUserWithEmailAndPassword(db, email, password);
      if (user) done(null, user);
      else done(null, false, { message: 'Email or password is incorrect' });
    }
  )
);

export default passport;
