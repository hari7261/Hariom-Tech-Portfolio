import React, { useState, useEffect } from 'react';
import { User, GitFork, Star } from 'lucide-react';
import Image from 'next/image';

// GitHub API component to fetch user stats
const GitHubStatsComponent = ({ username }) => {
    const [userStats, setUserStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGitHubStats = async () => {
            try {
                // Fetch user data
                const userResponse = await fetch(`https://api.github.com/users/${username}`);
                const userData = await userResponse.json();

                // Fetch repositories
                const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
                const reposData = await reposResponse.json();

                // Calculate stats
                const totalStars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
                const totalForks = reposData.reduce((acc, repo) => acc + repo.forks_count, 0);

                setUserStats({
                    avatarUrl: userData.avatar_url,
                    name: userData.name,
                    bio: userData.bio,
                    publicRepos: userData.public_repos,
                    followers: userData.followers,
                    totalStars,
                    totalForks
                });
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchGitHubStats();
    }, [username]);

    // Loading state
    if (loading) {
        return (
            <div className="animate-pulse flex space-x-4 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <div className="rounded-full bg-gray-300 dark:bg-gray-600 h-20 w-20"></div>
                <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                    <div className="space-y-2">
                        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
                        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-5/6"></div>
                    </div>
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div className="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 p-4 rounded-lg">
                <p className="text-red-700 dark:text-red-200">
                    Unable to fetch GitHub stats. Please try again later.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 transition-colors duration-300 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:space-x-6 mb-6">
                <Image
                    src={userStats.avatarUrl}
                    alt={`${username}'s GitHub avatar`}
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full border-4 border-blue-500 dark:border-blue-300"
                />
                <div className="text-center md:text-left mt-4 md:mt-0">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                        {userStats.name || username}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">{userStats.bio}</p>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <StatCard
                    icon={<User className="text-blue-500 dark:text-blue-300" />}
                    value={userStats.publicRepos}
                    label="Public Repos"
                />
                <StatCard
                    icon={<User className="text-green-500 dark:text-green-300" />}
                    value={userStats.followers}
                    label="Followers"
                />
                <StatCard
                    icon={<Star className="text-yellow-500 dark:text-yellow-300" />}
                    value={userStats.totalStars}
                    label="Total Stars"
                />
                <StatCard
                    icon={<GitFork className="text-purple-500 dark:text-purple-300" />}
                    value={userStats.totalForks}
                    label="Total Forks"
                />
            </div>

            {/* GitHub Contributions Graph */}
            <div className="mt-6 bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
                    GitHub Contribution Graph
                </h3>
                <Image
                    src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&border_radius=7&date_format=M%20j%5B%2C%20Y%5D&card_width=700&card_height=350`}
                    alt="GitHub Streak Stats"
                    className="w-full h-40 object-contain mb-4 rounded-md shadow-md transition-transform transform hover:scale-105"
                />
            </div>

            {/* GitHub Activity Graph */}
            <div className="mt-6 bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
                    GitHub Activity Graph
                </h3>
                <Image
                    src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=0d0d0d&color=06fe65&line=04ff00&point=00b33e&area=true&hide_border=true`}
                    alt="GitHub Activity Graph"
                    className="w-full object-contain mb-4 rounded-md shadow-md transition-transform transform hover:scale-105"
                />
            </div>

            {/* Holopin Badges Section */}
            <div className="mt-6 bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
                    Holopin Badges
                </h3>
                <a href="https://holopin.io/@hari7261" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="https://holopin.me/hari7261"
                        alt="Holopin Badges"
                        className="mx-auto w-full h-auto max-w-lg rounded-md shadow-md transition-transform transform hover:scale-105"
                    />
                </a>
            </div>
        </div>
    );
};

// Reusable Stat Card Component
const StatCard = ({ icon, value, label }) => (
    <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4 text-center shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex justify-center items-center mb-2">
            {icon}
            <span className="ml-2 text-3xl font-bold text-gray-800 dark:text-gray-200">
                {value}
            </span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
    </div>
);

export default function GitHubStats() {
    return (
        <div className="container mx-auto px-4 py-12">
            <GitHubStatsComponent username="hari7261" />
        </div>
    );
}
