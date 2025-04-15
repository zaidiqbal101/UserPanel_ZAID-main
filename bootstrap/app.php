<?php

use App\Http\Middleware\Authenticate;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ]);
        // Adding CheckUserBalance to API middleware group (optional)
        $middleware->api(append: [
            \App\Http\Middleware\CheckUserBalance::class,
            \App\Http\Middleware\CheckIpWhitelist::class,
        ]);
            $middleware->alias([
            "LocationCapture" => App\Http\Middleware\LocationCapture::class,
            "check.balance" => \App\Http\Middleware\CheckUserBalance::class,
            'ip.whitelist' => \App\Http\Middleware\CheckIpWhitelist::class,
            "auth" => Authenticate::class,
            'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
            'verified'  => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class,
            'service'   => \App\Http\Middleware\ServiceStatus::class,
            'servicepermission' => \App\Http\Middleware\ServicePermission::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
