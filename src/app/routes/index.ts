import express from 'express';
import { UserRouters } from '../modules/user/user.routes';
import { AuthRouters } from '../modules/auth/auth.routes';
import path from 'path';
import { groupRoutes } from '../modules/group/group.routes';
import { NotificationRoutes } from '../modules/notification/Notification.routes';
import { ServiceRoutes } from '../modules/service/service.routes';
import { jobPostRoutes } from '../modules/jobPost/jobPost.routes';
import { jobApplicationsRoutes } from '../modules/jobApplications/jobApplications.routes';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRouters,
  },
  {
    path: '/users',
    route: UserRouters,
  },
  {
    path: '/groups',
    route: groupRoutes,
  },
  {
    path: '/notifications',
    route: NotificationRoutes,
  },
  {
    path: '/services',
    route: ServiceRoutes
  },
  {
    path: '/job-posts',
    route: jobPostRoutes,
  },
  {
    path: '/job-applications',
    route: jobApplicationsRoutes
  }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
