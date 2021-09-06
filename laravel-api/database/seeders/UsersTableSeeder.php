<?php

namespace Database\Seeders;
use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $users = [
            [
                'name'     => 'Admin',
                'email'    => 'admin@admin.com',
                'password' => bcrypt('admin'),
                'isAdmin'  => true
            ],
            [
                'name'     => 'Test man',
                'email'    => 'test@test.com',
                'password' => bcrypt('test'),
                'isAdmin'  => false
            ],
            [
                'name'     => 'Fake man',
                'email'    => 'fake@fake.com',
                'password' => bcrypt('fake'),
                'isAdmin'  => false
            ],
        ];

        foreach ($users as $user) {
            User::create($user);
        }
    }
}
